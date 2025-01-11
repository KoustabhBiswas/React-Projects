import crypto from 'crypto';
import jwt from 'jsonwebtoken'
export class Encryption {
    // private key = crypto.randomBytes(32);
    // private iv = Buffer.from('1234567890123456');
    private jwtSecret = Buffer.from(process.env.JWT_SECRET as string);
    // private iv = "TESTR";
    encryptData = (data: any) => {
        const encrypted = jwt.sign({data},  this.jwtSecret, { algorithm: 'HS512' });
        
        
        // console.log(this.key);
        // const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
        // let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        // encrypted += cipher.final('hex');
        return encrypted;
    }
    decryptData = (data:any) => {
        const decrypted = jwt.verify(data,this.jwtSecret);
        // let decipher = crypto.createDecipheriv('aes-256-cbc',this.key,this.iv);
        // let decrypted = decipher.update( data,'hex','utf8');
        // decrypted += decipher.final('utf8');
        return decrypted;
    }

}