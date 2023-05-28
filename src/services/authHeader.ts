const authHeader = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        //En caso de fallar añadir header de Allow origin. y headers faltantes.
      };
    } else {
      return {};
    }
  };
  
  export default authHeader;