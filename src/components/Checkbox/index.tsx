import * as React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Image, Assets } from 'react-native-ui-lib';

export interface CheckBoxProps {
    value?: string;
    onValueChange?: (value: string | undefined, isChecked: boolean) => void;
    style?: any;
    checked: boolean;
}

export interface CheckBoxState {
    checked: boolean;
}

export default class CheckBoxComponent extends React.Component<
    CheckBoxProps,
    CheckBoxState
    > {
    static defaultProps = {
        value: '',
        checked: false,
    };

    constructor(props: CheckBoxProps) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };
    }

    onValueChange = (value: any) => {
        this.setState(
            {
                checked: value,
            },
            () => {
                this.props.onValueChange && this.props.onValueChange(this.props.value, this.state.checked);
            },
        );
    };

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.value !== this.props.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    render() {
        return (
            <CheckBox
                check={this.state.checked}
                onValueChange={this.onValueChange}
                style={this.props.style}
            />
        );
    }
}

const CheckBox = ({ check, onValueChange, style, ...props }: { check: boolean, onValueChange: any, style: ViewStyle }) => (
    <TouchableOpacity
        style={[styles.checkBox, style]}
        onPress={(e) => {
            e.stopPropagation();
            onValueChange(!check);
        }}
        {...props}>
        <Image source={check ? Assets.icons.ic_check : Assets.icons.ic_uncheck} width={22} height={22} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
