import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import cors from "cors";

// Inicializa o Firebase Admin SDK
admin.initializeApp();

const corsHandler = cors({origin: true});

export const login = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Método não permitido" });
        }

        const { email } = req.body;

        try {
            // Busca o usuário pelo e-mail no Firebase Authentication
            const userRecord = await admin.auth().getUserByEmail(email);

            if (!userRecord) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }

            return res.status(200).json({ uid: userRecord.uid, email: userRecord.email });
        } catch (error) {
            return res.status(400).json({ error: "Credenciais inválidas ou usuário não encontrado" });
        }
    });
});
