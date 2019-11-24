import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="http://ohif.org"
    >
      {/* Logo text would fit smaller displays at two lines:
       * <Icon name="ohif-logo" className="header-logo-image" />
       * <Icon name="ohif-text-logo" className="header-logo-text" />
       * Open Health
       * Imaging Foundation
       *
       * Or as `OHIF` on really small displays
       * <Icon name="ohif-logo" className="header-logo-image" />
       <Icon name="ohif-logo" className="header-logo-image" />
      <Icon name="jlk-logo" className="header-logo-text" />
       */} 
       <img style={{width:'200px', height:'37px'}}
       src='data:image/png;base64,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'/>
       
      
    </a>
  );
}

export default OHIFLogo;
