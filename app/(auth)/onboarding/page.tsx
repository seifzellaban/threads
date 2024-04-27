import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs/server";

async function Page() {
  const user = await currentUser();

  const userInfo: {
    _id?: string;
    username?: string;
    name?: string;
    bio?: string;
    image?: string;
  } = {};


  const userData = {
    id: user?.id || "", 
    objectId: userInfo?._id || "",
    username: userInfo?.username || user?.username || "",
    name: userInfo?.name || user?.firstName || "", 
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl || "", 
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-center px-10 py-20">
      {" "}
      {/* Fixed typo in className */}
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
