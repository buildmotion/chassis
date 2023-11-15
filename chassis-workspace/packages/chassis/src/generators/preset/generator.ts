import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';
// import { applicationGenerator } from '@nrwl/angular/generators'

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  const projectRoot = `.`; // `libs/${options.name}`;

  // add application to workspace;
  addProjectConfiguration(tree, options.appName, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/apps/${options.appName}/src`,
    generators: {
      "@nrwl/angular": {
        "application": {
          "style": "scss",
          "strict": true,
          "standaloneConfig": true,
          "routing": true,
        }
      }
    },
    targets: {},
  });

  // add dependencies to package.json;  
  addDependenciesToPackageJson(tree,
    {
      '@buildmotion/actions': 'latest',
      '@buildmotion/common': 'latest',
      '@buildmotion/configuration': 'latest',
      '@buildmotion/core': 'latest',
      '@buildmotion/error-handling': 'latest',
      '@buildmotion/foundation': 'latest',
      '@buildmotion/http-service': 'latest',
      '@buildmotion/logging': 'latest',
      '@buildmotion/notifications': 'latest',
      '@buildmotion/rules-engine': 'latest',
      '@buildmotion/validation': 'latest'
    }, {});

  //generate a start script for the new application;
  updateJson(tree, 'package.json', (json) => {
    json.scripts = json.scripts || {};

    json.scripts.start = `nx serve ${options.appName}`;
    return json;
  });

  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default presetGenerator;
