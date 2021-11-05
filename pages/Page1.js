import React from 'react';
import {View, Text} from 'react-native';
import {Button, Portal, Modal} from 'react-native-paper';

const Page1 = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Page 1</Text>
      <Button onPress={() => navigation.navigate('Page2')}>Navigate</Button>
      <Button onPress={showModal}>Show Modal (working)</Button>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
    </View>
  );
};

export default Page1;
