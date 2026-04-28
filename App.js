
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/images/bg-overlay.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* LOGO */}
        <Image
          source={require("./assets/images/unicopa.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TÍTULO */}
        <Text style={styles.title}>CALENDÁRIO</Text>

        {/* CARD DIA */}
        <View style={styles.card}>
          <Text style={styles.date}>11/06</Text>

          {/* JOGO */}
          <View style={styles.match}>
            <Text style={styles.group}>GRUPO A • Brasil x Argentina</Text>

            <View style={styles.teamsRow}>
              <View style={styles.team}>
                <Image
                  source={require("./assets/images/brazil.png")}
                  style={styles.flag}
                />
                <Text style={styles.teamCode}>BRA</Text>
              </View>

              <View style={styles.timeBox}>
                <Text style={styles.time}>16:00</Text>
                <Text style={styles.vs}>VS</Text>
              </View>

              <View style={styles.team}>
                <Image
                  source={require("./assets/images/argentina.png")}
                  style={styles.flag}
                />
                <Text style={styles.teamCode}>ARG</Text>
              </View>
            </View>

            <Text style={styles.stadium}>
              Estádio Exemplo • Cidade Exemplo
            </Text>
          </View>

          {/* DIVISOR */}
          <View style={styles.divider} />

          {/* JOGO 2 */}
          <View style={styles.match}>
            <Text style={styles.group}>GRUPO A • Chile x Finlândia</Text>

            <View style={styles.teamsRow}>
              <View style={styles.team}>
                <Image
                  source={require("./assets/images/chile.png")}
                  style={styles.flag}
                />
                <Text style={styles.teamCode}>CHI</Text>
              </View>

              <View style={styles.timeBox}>
                <Text style={styles.time}>23:00</Text>
                <Text style={styles.vs}>VS</Text>
              </View>

              <View style={styles.team}>
                <Image
                  source={require("./assets/images/finland.png")}
                  style={styles.flag}
                />
                <Text style={styles.teamCode}>FIN</Text>
              </View>
            </View>

            <Text style={styles.stadium}>
              Estádio Exemplo • Cidade Exemplo
            </Text>
          </View>
        </View>

        {/* SEGUNDO CARD */}
        <View style={styles.card}>
          <Text style={styles.date}>12/06</Text>

          <View style={styles.match}>
            <Text style={styles.group}>GRUPO B • Brasil x Chile</Text>

            <View style={styles.teamsRow}>
              <View style={styles.team}>
                <Image
                  source={require("./assets/images/brazil.png")}
                  style={styles.flag}
                />
                <Text style={styles.teamCode}>BRA</Text>
              </View>

              <View style={styles.timeBox}>
                <Text style={styles.time}>16:00</Text>
                <Text style={styles.vs}>VS</Text>
              </View>

              <View style={styles.team}>
                <Image
                  source={require("./assets/images/chile.png")}
                  style={styles.flag}
                />
                <Text style={styles.teamCode}>CHI</Text>
              </View>
            </View>

            <Text style={styles.stadium}>
              Estádio Exemplo • Cidade Exemplo
            </Text>
          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    padding: 20,
    paddingTop: 60,
  },

  logo: {
    width: 180,
    height: 80,
    alignSelf: "center",
    marginBottom: 10,
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(10, 25, 47, 0.9)",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },

  date: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  match: {
    marginBottom: 10,
  },

  group: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 10,
  },

  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  team: {
    alignItems: "center",
  },

  flag: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },

  teamCode: {
    color: "#fff",
    fontWeight: "bold",
  },

  timeBox: {
    alignItems: "center",
  },

  time: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  vs: {
    color: "#aaa",
    fontSize: 12,
  },

  stadium: {
    color: "#aaa",
    fontSize: 11,
    marginTop: 10,
  },

  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 10,
  },
});
