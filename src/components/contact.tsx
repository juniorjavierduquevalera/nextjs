import SocialMedia from "app/ui/socialmedia";
import Email from "app/ui/email";

export default function Contact() {
  return (
    <>
      <div className="w-full bg-gray-50 pb-10">
        <div className="p-2 w-full border-t pt-10 border-gray-200 text-center">
          <span className="flex justify-center gap-2">
            <Email />
          </span>
          <p className="leading-normal my-2">
            Maracay-Edo Aragua
            <br />
            Venezuela
          </p>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
