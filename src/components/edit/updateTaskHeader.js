import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

//Style
import styles from './style';

const UpdateTaskHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Task</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          value={props.titleValue}
          onChangeText={props.onChangeTitle}
          style={styles.input}
          placeholder="Write a task...."
        />

        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.addTaskBtn}
            onPress={props.updateTaskAction}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addTaskBtn}
            onPress={props.updateTaskAction}>
            <View style={styles.cancelWrapper}>
              <Text style={styles.cancelText}>❌</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* <TouchableOpacity style={styles.cancelBtn} onPress={props.cancelAction}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default UpdateTaskHeader;
