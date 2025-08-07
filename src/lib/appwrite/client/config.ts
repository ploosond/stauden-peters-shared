import { TLoginFormSchema } from "@/lib/validation";
import { Account, Client, ID, Storage } from "appwrite";

// Init your Web SDK
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("67f1754b0019f53f147e"); // Your project ID

export const account = new Account(client);
export const storage = new Storage(client);

export async function Login(data: TLoginFormSchema) {
  console.log(data)

  const promise = account.createEmailPasswordSession(
    "email@example.com",
    "password"
  );
  console.log(promise);
}

export async function UploadFile(file: File) {
  console.log(file);
  const session = await account.get();
  if (!session) throw new Error("No session");
  // await account.deleteSession("current")
  console.log("session", session);
  const promise = await storage.createFile(
    "67f22ed300116bb747ec",
    ID.unique(),
    file
  );
  console.log(promise);
}
