import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';

//Style
import Styles from './Style';

// Component;
import UpdateTaskHeader from '@components/edit/updateTaskHeader';
import * as actionTasks from '@store/action/task';
import TimePicker from '../Time/TimePicker';

const UpdateTask = ({navigation, route}) => {
  const {data} = route.params;
  const [title, setTitle] = useState('');
  // const [time, setTime] = useState(new Date().toLocaleString());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Formatted, setFormatted] = useState('');

  const dispatch = useDispatch();

  const updateTaskHandler = () => {
    let updateData = {
      id: data.id,
      title: title,
      time: Formatted,
    };
    if (updateData.title === '' && updateData.time === '') {
      updateData.title = data.title;
      updateData.time = data.time;
    }
    dispatch(actionTasks.updateTasks(updateData));
    navigation.goBack();
    ToastAndroid.show('Task Updated Successfully', ToastAndroid.SHORT);
  };

  const cancelHandler = () => {
    dispatch(actionTasks.updateTasks(data));
    navigation.goBack(title);
  };

  //Confirm
  const handleConfirm = data => {
    setFormatted(FormatDate(data));
    setModalVisible(false);
    // setDatePickerVisibility({dateAndTime: dateAndTime.toString()});
    // console.log('A date has been picked: ', dateAndTime);
    // hideDatePicker();
  };

  const FormatDate = data => {
    let dateTimeString =
      data.getDate() +
      '/' +
      (data.getMonth() + 1) +
      '/' +
      data.getFullYear() +
      ' ';

    var hours = data.getHours();
    var minutes = data.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours % 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    dateTimeString = dateTimeString + hours + ':' + minutes + ' ' + ampm;

    return dateTimeString;
  };

  //Cancel
  const hideDatePicker = data => {
    setDatePickerVisibility(false);
  };

  //Pick Date
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  return (
    <View>
      <UpdateTaskHeader
        titleValue={title}
        onChangeTitle={value => setTitle(value)}
        cancelAction={cancelHandler}
        updateTaskAction={updateTaskHandler}
      />
      <TimePicker
        isVisible={isDatePickerVisible}
        mode="datetime"
        handleConfirm={handleConfirm}
        hideDatePicker={hideDatePicker}
        showDatePicker={showDatePicker}
        Formatted={Formatted}
      />
    </View>
  );
};

export default UpdateTask;
