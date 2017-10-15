import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditInPlace extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        validate: PropTypes.func,
        style: PropTypes.object,
        extraParams: PropTypes.object,
        errorStyle: PropTypes.object,
        isDisabled: PropTypes.bool,
        type: PropTypes.oneOf([
            'color',
            'date',
            'datetime-local',
            'email',
            'month',
            'number',
            'range',
            'search',
            'tel',
            'time',
            'url',
            'week',
            'text',
            'select',
            'textarea'
        ]).isRequired,
        dropDownOptions: PropTypes.array
    };

    static defaultProps = {
        type: 'text',
        isDisabled: false,
        editing: false,
        dropDownOptions: [],
        value: "click to edit",
        errorStyle: { background: '#ffd4d4', border: '1px dotted red' }
    };

    state = {
        value: this.props.value,
        editable: false,
        error: false
    };

    /**
     * Triggered When a Field Value is Changed
     * @param {Object} e change event of input
     * @param {boolean} blurOnFinish if the input finished after updating its value
     * @memberof EditInPlace
     */
    _onFieldChange = (e, blurOnFinish) => {

        const { validate, onChange, name, extraParams } = this.props;

        // Update Value
        this.setState({ value: e.target.value })

        // Change Prop and Validation
        if (onChange) {

            if (validate) {

                if (validate(e)) {
                    onChange(e.target.value, name, extraParams)
                } else {
                    this.setState({ error: true })
                }
            } else {
                onChange(e.target.value, name, extraParams)

            }

        }

        // Finish if the component finished on blur
        if (blurOnFinish) this._onFinishEditing();

    }


    /**
     * Defines Component that dose not finish on Blur
     * @memberof EditInPlace
     */
    blurOnFinish = [
        'color'
    ]



    /**
     * builds the input using the type prop attaching all the required props 
     * and events
     * @memberof EditInPlace
     * @returns {Object} rendered Input or Component
     */
    getEditComponent = () => {

        const { isDisabled, type, style, errorStyle, dropDownOptions, name, placeholder, className } = this.props;

        const blurOnFinish = this.blurOnFinish.includes(type);

        const fieldProps = {
            onChange: (e) => this._onFieldChange(e, blurOnFinish),
            disabled: isDisabled ? true : false,
            style: this.state.error ? { ...style, ...errorStyle } : style,
            value: this.state.value,
            onBlur: blurOnFinish ? null : this._onFinishEditing,
            onFocus: this._handleFocus,
            autoFocus: true,
            placeholder,
            className,
            name
        }

        if (!this.state.editable) {
            return <span onClick={isDisabled ? null : this.onEditEnable}>{this.state.value}</span>
        } else {

            // Custom Inputs
            switch (type) {
                case "textarea":
                    return <textarea {...fieldProps} />
                case "select":
                    return (
                        <select {...fieldProps}>
                            <option>--select--</option>
                            {dropDownOptions.map(option => <option key={option}>{option}</option>)}
                        </select>
                    )

                default:
                    // HTML5 Inputs
                    return <input type={type} {...fieldProps} />
            }



        }
    }

    /**
     * enables the component to be editable using the editable state
     * @memberof EditInPlace
     */
    onEditEnable = () => {
        this.setState({ editable: true })
    }

    /**
     * finish the editing of the component using the editable state
     * @memberof EditInPlace
     */
    _onFinishEditing = (e) => {
        this.setState({ editable: false })
    }

    /**
     * Foucs on the component and highlight its value
     * @memberof EditInPlace
     */
    _handleFocus = (e) => {
        if (this.props.type !== "select") {
            e.target.select();
        }
    }

    render() {
        return (
            <div className="_edit__in__place__container_" >
                {this.getEditComponent()}
            </div>
        )
    }
}