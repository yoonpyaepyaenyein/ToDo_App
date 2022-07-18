import React, {useState, useEffect} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';

//Style
import Styles from './Style';

//Component
import AddTaskHeader from '../../components/add/addTaskHeader';
import * as actionTasks from '../../store/action/task';

const AddTask = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(new Date().toLocaleString());
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const addHandler = () => {
    let data = {
      title: title,
      time: time,
    };
    dispatch(actionTasks.addTasks(data));
    navigation.goBack();
    ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT);

    console.log('dispatch>>>>', data);
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  return (
    <View>
      <AddTaskHeader
        titleValue={title}
        onChangeTitle={value => setTitle(value)}
        addAction={addHandler}
        cancelAction={cancelHandler}
      />
    </View>
  );
};

export default AddTask;
