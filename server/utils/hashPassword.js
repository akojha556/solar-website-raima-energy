import bcrypt from "bcryptjs";

const password = "Raima@Emergy-123";

const hashedPassword = async () => {
     const salt = await bcrypt.genSalt(12);
     const hashed = await bcrypt.hash(password, salt);
     console.log(hashed);
}

hashedPassword();