import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    directConnect: true,    
    specs: ['src/spec.js'],
}
