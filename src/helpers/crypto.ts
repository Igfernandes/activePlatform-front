import crypto from "crypto";

export function encryption(data: unknown, secretKey: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(`${process.env.NEXT_CRYPTO_PREFIX_KEY}_${secretKey}`, "utf-8"),
    iv
  );
  let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv.toString("hex"), encrypted };
}

export function decryption(data: string, iv: string, secretKey: string) {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(`${process.env.NEXT_CRYPTO_PREFIX_KEY}_${secretKey}`, "utf-8"),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}
