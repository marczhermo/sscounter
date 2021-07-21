<?php

namespace Marcz\SSCounter;

use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Control\Director;
use SilverStripe\Forms\FormField;
use MaximeRainville\SilverstripeReact\BootstrapComponent;

class SSCounterField extends FormField
{

    use BootstrapComponent;

    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    protected $schemaComponent = 'SSCounterField';

    public function getProps(): array
    {
        return [
            'name'        => $this->getName(),
            'value'       => $this->Value() ?: 0,
            'extraClass'  => 'sscounter sscounter-info',
        ];
    }

    public function getComponent(): string
    {
        return $this->schemaComponent;
    }

    /**
     * Attributes to be given for this field type.
     *
     * @return array
     */
    public function getAttributes()
    {
        $attributes = [
            'class'       => $this->extraClass(),
            'id'          => $this->ID(),
            'name'        => $this->getName(),
            'value'       => $this->Value(),
            'data-schema' => json_encode($this->getSchemaData()),
            'data-state'  => json_encode($this->getSchemaState()),
            'data-component' => $this->getComponent(),
            'data-props' => json_encode($this->getProps()),
        ];

        $attributes = array_merge($attributes, $this->attributes);

        $this->extend('updateAttributes', $attributes);

        return $attributes;
    }
}
