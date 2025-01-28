import { auth } from "../_lib/auth";
import { getGuest } from "../_lib/data-service";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const guest = await getGuest("ebubenwanze@gmail.com");
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
