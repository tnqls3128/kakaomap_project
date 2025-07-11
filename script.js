const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=4000&pageNo=1&MobileOS=ETC&MobileApp=camping&serviceKey=Bsmv4JkPdx5S9NKO3LG14v%2FrPvVdjEp%2BY8qSKEwLa6yiuVP7SNfSo8Ds1UbtnFDQK3Je3BVuk6cYJy6kA3hk5g%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    const data = result.response.body.items.item;

    const showPosition = (position) => {
      const { latitude, longitude } = position.coords;

      const container = document.getElementById("map");
    };

    const errorPosition = (error) => {
      alert(error.message);
    };
    window.navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition
    );
  });
