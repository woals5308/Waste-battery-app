import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

const Cart = () => {
  const router = useRouter()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "일반 쓰레기 봉투",
      points: 30,
      quantity: 0,
      image: require("../../assets/images/재쓰봉투.png"),
    },
    {
      id: 2,
      name: "음식물 쓰레기 봉투",
      points: 30,
      quantity: 0,
      image: require("../../assets/images/일쓰봉투.png"),
    },
    {
      id: 3,
      name: "재활용 봉투",
      points: 30,
      quantity: 0,
      image: require("../../assets/images/음쓰봉투.png"),
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPoints = cartItems.reduce(
    (total, item) => total + item.points * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>장바구니</Text>
      </View>

      <View style={styles.itemList}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPoints}>{item.points} 포인트</Text>
            </View>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleDecrease(item.id)}
              >
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleIncrease(item.id)}
              >
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.totalText}>총합: {totalPoints} 포인트</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={()=>router.push('/PointShop/Payment')}>
          <Text style={styles.checkoutText}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179",
  },
  header: {
    backgroundColor: "#FFD700",
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4BB179",
  },
  itemList: {
    flex: 1,
    justifyContent: "space-between", // 아이템 사이 간격 균등
    paddingHorizontal: 20,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
    flex: 1, // 모든 컨테이너가 균등하게 공간 차지
    marginBottom: 10, // 각 품목 간 간격 추가
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4BB179",
  },
  itemPoints: {
    fontSize: 14,
    color: "#4BB179",
    marginTop: 5,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4BB179",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#4BB179",
  },
  footer: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4BB179",
  },
  checkoutButton: {
    backgroundColor: "#4BB179",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Cart;
