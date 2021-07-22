<?php

namespace Marcz\SSCounter;

use MaximeRainville\SilverstripeReact\ReactFormField;
use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Control\Director;
use SilverStripe\Forms\FormField;
use MaximeRainville\SilverstripeReact\BootstrapComponent;

class SSCounterField extends ReactFormField
{

    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    protected $schemaComponent = 'SSCounterField';

    public function getProps(): array
    {
        return array_merge(
            parent::getProps(),
            [
                'extraClass' => $this->extraClass(),
            ]
        );
    }

    public function getComponent(): string
    {
        return $this->schemaComponent;
    }

    public function Value()
    {
        return parent::Value() ?: 0;
    }

    /**
     * Compiles all CSS-classes.
     *
     * @return string
     */
    public function extraClass()
    {
        $extraClasses = [];
        if (!empty($this->extraClasses)) {
            $extraClasses = $this->extraClasses;
        }

        return implode(' ', array_unique($extraClasses));
    }
}
