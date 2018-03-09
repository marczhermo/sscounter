<?php

namespace Marcz\SSCounter;

use SilverStripe\Forms\FormField;

class SSCounterField extends FormField
{
    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    protected $schemaComponent = 'SSCounterField';

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
        ];

        $attributes = array_merge($attributes, $this->attributes);

        $this->extend('updateAttributes', $attributes);

        return $attributes;
    }
}
