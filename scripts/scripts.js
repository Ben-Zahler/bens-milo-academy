/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { setLibs, initSidekick } from './utils.js';

window.adobeid = {
  env: '//ims-na1-stg1.adobelogin.com',
  environment: 'stg1',
  jumpToken: { api: '/ims/jumptoken/v1' },
  client_id: 'DocumentCloud1',
  scope: 'AdobeID,openid,creative_cloud,gnav,sao.cce_private,additional_info.roles,read_organizations',
  uses_redirect_mode: true,
  locale: 'en_US',
  uses_modal_mode: false,
  api_parameters: { authorize: { state: { ac: '' } } },
  redirect_uri: 'https:\/\/www.adobe.com\/#ref_dc' || documentsLink,
  autoValidateToken: true,
};

const scriptEle = document.createElement('script');

scriptEle.setAttribute('src', 'https://auth-stg1.services.adobe.com/imslib/imslib.min.js');
scriptEle.setAttribute('type', 'text/javascript');

document.body.appendChild(scriptEle);
console.log('script loaded');

// Add project-wide style path here.
const STYLES = '';

// Use 'https://milo.adobe.com/libs' if you cannot map '/libs' to milo's origin.
const LIBS = '/libs';

// Add any config options.
const CONFIG = {
  // codeRoot: '',
  // contentRoot: '',
  // imsClientId: 'college',
  // geoRouting: 'off',
  // fallbackRouting: 'off',
  locales: {
    '': { ietf: 'en-US', tk: 'hah7vzn.css' },
    de: { ietf: 'de-DE', tk: 'hah7vzn.css' },
    kr: { ietf: 'ko-KR', tk: 'zfo3ouc' },
  },
};

// Load LCP image immediately
(function loadLCPImage() {
  const lcpImg = document.querySelector('img');
  lcpImg?.removeAttribute('loading');
}());

/*
 * ------------------------------------------------------------
 * Edit below at your own risk
 * ------------------------------------------------------------
 */

const miloLibs = setLibs(LIBS);

(function loadStyles() {
  const paths = [`${miloLibs}/styles/styles.css`];
  if (STYLES) { paths.push(STYLES); }
  paths.forEach((path) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', path);
    document.head.appendChild(link);
  });
}());

(async function loadPage() {
  const { loadArea, setConfig } = await import(`${miloLibs}/utils/utils.js`);

  setConfig({ ...CONFIG, miloLibs });
  await loadArea();
  initSidekick();
}());
