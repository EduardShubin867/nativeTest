import React from 'react';
import {View, Modal, TouchableOpacity, Text, Button} from 'react-native';
import Share from 'react-native-share';

const ShareModal = ({isVisible, onClose}) => {
  const openShareModal = async () => {
    try {
      const shareOptions = {
        message: 'Message to share',
      };
      const result = await Share.open(shareOptions);
      console.log(result);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <TouchableOpacity onPress={openShareModal}>
            <Text>Share via messaging apps</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={{marginTop: 10}}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ShareModal;
