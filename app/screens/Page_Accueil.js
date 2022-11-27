import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";
import Quiz from "./Quizz";

export const pseudo_joueur = "Flo";

const Page_Accueil = (props) => {
  const goTo = () => {
    props.navigation.push("Quizz");
  };

  const [text, onChangeText] = React.useState("");
  

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position: "relative",
      }}
    >
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Page d'Acceuil */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
            marginTop: 40,
            textAlign: "center"
          }}
        >
          Essayer notre Quizz
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Entrer Votre Pseudo"
          keyboardType="text"
        />
        <TouchableOpacity
          onPress={goTo}
          style={{
            marginTop: 70,
            width: "100%",
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}
          >
            Commencer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 10,
    backgroundColor: COLORS.white,
    fontSize : 20,
  },
});

export default Page_Accueil;
