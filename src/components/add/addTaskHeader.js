import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

//Style
import styles from './style';

const AddTaskHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          value={props.titleValue}
          onChangeText={props.onChangeTitle}
          style={styles.input}
          placeholder="Write a task...."
        />

        <TouchableOpacity style={styles.addTaskBtn} onPress={props.addAction}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddTaskHeader;
