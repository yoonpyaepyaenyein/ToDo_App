import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';

//Library
import {format} from 'date-fns';

//Style
import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Component
import Delete from '../../../assets/icons/delete';
import Update from '../../../assets/icons/update';

const MainHeader = props => {
  const [done, setDone] = useState(false);

  const doneHandler = value => {
    setDone(value);
    ToastAndroid.show('Done ....👏', ToastAndroid.SHORT);
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>TODO LIST</Text>
      </View>

      <View style={styles.addContainer}>
        {props.data.length > 0 ? (
          props.data.map(item => (
            <View
              style={[
                styles.item,
                {backgroundColor: item.id === done.id ? '#BAD8BD' : '#ddd'},
              ]}
              key={Math.random()}>
              <View style={styles.itemLeft}>
                <TouchableOpacity
                  style={styles.square}
                  onPress={() => doneHandler(item)}></TouchableOpacity>
                <Text style={styles.text}>{item.title}</Text>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>
                  {format(new Date(item.time), ' dd/MM/yyyy , p')}
                </Text>
              </View>

              <View style={styles.rightContainer}>
                <TouchableOpacity
                  onPress={() => props.updateTaskAction(item)}
                  style={styles.deleteBtn}>
                  <Update width={hp(4.5)} height={hp(4.2)} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => props.deleteTaskAction(item)}
                  style={styles.deleteBtn}>
                  <Delete width={hp(3.1)} height={hp(3.1)} />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.nullInfo}>
            <Image
              source={require('../../../assets/images/todo1.png')}
              style={styles.emptyImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>There is no note available</Text>
              <Text style={styles.text}>
                Press button " ＋ " to add new note
              </Text>
            </View>
          </View>
        )}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TouchableOpacity style={styles.button} onPress={props.addTaskAction}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MainHeader;

// const checkboxHandler = value => {
//   // console.log('value>>>', props.data[value - 1].id);
//   // if (value === props.data[value - 1].id) {
//   //   setToggleCheckBox(true);
//   // } else {
//   //   setToggleCheckBox(false);
//   // }
//   // if (value === true) {
//   //   ToastAndroid.show('DONE.....👏', ToastAndroid.SHORT);
//   // } else {
//   //   null;
//   // }
//   // if (item.id === value.id) {
//   //   toggleCheckBox(true);
//   // } else {
//   //   toggleCheckBox(false);
//   // }
// };
