import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "minuevacontraseñajwt";
export const verifyToken = (req, res, next) => {

    // 1. Extraer el encabezado Authorization
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
      return res.status(401).json({ message: "Token no proporcionado" });
    }
  
    // 2. Extraer el token del encabezado
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Formato de token inválido" });
    }
  
    // 3. Validar el token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido o expirado" });
      }
  
      // 4. Agregar los datos del usuario al objeto `req` para usarlos más adelante
      req.user = decoded;
      next();
    });
  };