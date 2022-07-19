import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Style
import Styles from './Style';

//Component
import Time from '../../../assets/icons/time';

const TimePicker = props => {
  return (
    <View style={Styles.container}>
      <Text style={{marginTop: wp(0.7)}}> Pick Date & Time</Text>
      <TouchableOpacity onPress={props.showDatePicker}>
        <Time width={hp(6)} height={hp(4)} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={props.isVisible}
        mode={props.mode}
        onConfirm={props.handleConfirm}
        onCancel={props.hideDatePicker}
      />
    </View>
  );
};

export default TimePicker;
