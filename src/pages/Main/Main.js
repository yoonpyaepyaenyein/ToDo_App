import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

//Style
import Styles from './Style';

//Component
import MainHeader from '@components/main/mainHeader';
import * as actionTasks from '@store/action/task';

const Main = ({navigation}) => {
  const dispatch = useDispatch();

  //Add Task

  const addTaskHandler = () => {
    navigation.navigate('AddTask');
  };

  const taskList = useSelector(state => {
    let taskData = state.taskLists.tasks;
    let updateTaskList = [];

    for (const key in taskData) {
      updateTaskList.push({
        id: taskData[key].id,
        title: taskData[key].title,
        time: taskData[key].time,
      });
    }
    return updateTaskList;
  });

  //Update Task

  const updateTaskHandler = value => {
    navigation.navigate('UpdateTask', {data: value});
  };

  //Delete Task
  const deleteTaskHandler = value => {
    dispatch(actionTasks.deleteTasks(value.id));
    ToastAndroid.show('Task Deleted Successfully', ToastAndroid.SHORT);
  };

  return (
    <View style={Styles.container}>
      <MainHeader
        addTaskAction={addTaskHandler}
        data={taskList}
        updateTaskAction={updateTaskHandler}
        deleteTaskAction={deleteTaskHandler}
      />
    </View>
  );
};

export default Main;
