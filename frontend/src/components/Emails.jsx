import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useGetAllEmails from "../../hooks/useGetAllEmails";
import Email from "./Email";

const Emails = () => {
  useGetAllEmails();
  const { emails, searchText } = useSelector((store) => store.app);
  const [filterEmail, setFilterEmail] = useState([]);
  useEffect(() => {
    const filteredEmail = emails.filter((email) => {
      return (
        email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
        email.to.toLowerCase().includes(searchText.toLowerCase()) ||
        email.message.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilterEmail(filteredEmail);
  }, [searchText, emails]);

  if (!Array.isArray(emails)) {
    return <p>No emails available</p>;
  }

  return (
    <div>
      {filterEmail.length > 0 ? (
        filterEmail.map((email) => <Email key={email._id} email={email} />)
      ) : emails.length > 0 ? (
        emails.map((email) => <Email key={email._id} email={email} />)
      ) : (
        <p>No emails to display</p>
      )}
    </div>
  );
};

export default Emails;
