import React, {useState, useEffect} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';

//Style
import Styles from './Style';

//Library
import DateTimePickerModal from 'react-native-modal-datetime-picker';

//Component
import AddTaskHeader from '../../components/add/addTaskHeader';
import * as actionTasks from '../../store/action/task';
import TimePicker from '../Time/TimePicker';

const AddTask = ({navigation}) => {
  const [title, setTitle] = useState('');
  // const [time, setTime] = useState(new Date().toLocaleString());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Formatted, setFormatted] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const addHandler = () => {
    let data = {
      title: title,
      time: Formatted,
    };
    if (data.title === '' && data.time === '') {
      return navigation.goBack();
    }
    dispatch(actionTasks.addTasks(data));
    navigation.goBack();
    ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT);
  };

  //Confirm
  const handleConfirm = data => {
    setFormatted(FormatDate(data));
    setModalVisible(false);
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
      <AddTaskHeader
        titleValue={title}
        onChangeTitle={value => setTitle(value)}
        addAction={addHandler}
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

export default AddTask;
