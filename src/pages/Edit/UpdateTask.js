import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';

//Style
import Styles from './Style';

// Component;
import UpdateTaskHeader from '@components/edit/updateTaskHeader';
import * as actionTasks from '@store/action/task';

const UpdateTask = ({navigation, route}) => {
  const {data} = route.params;
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const updateTaskHandler = () => {
    let updateData = {
      id: data.id,
      title: title,
    };
    dispatch(actionTasks.updateTasks(updateData));
    navigation.goBack();
    ToastAndroid.show('Task Updated Successfully', ToastAndroid.SHORT);
  };

  const cancelHandler = () => {
    navigation.goBack(title);
  };

  return (
    <View>
      <UpdateTaskHeader
        titleValue={title}
        onChangeTitle={value => setTitle(value)}
        cancelAction={cancelHandler}
        updateTaskAction={updateTaskHandler}
      />
    </View>
  );
};

export default UpdateTask;
