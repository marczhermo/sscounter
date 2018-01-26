<?php
namespace Marcz\SSCounter;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class SSCounterAdminExtension extends Extension
{
    public function init()
    {
        Requirements::javascript('silverstripe/marcz-sscounter: client/dist/js/bundle.js');
        Requirements::css('silverstripe/marcz-sscounter: client/dist/styles/bundle.css');
    }
}
