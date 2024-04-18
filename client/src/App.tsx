import "./App.css";
import { CommentSection, User } from "replyke";

function App() {
  function LOGIN_CALLBACK(): void {
    throw new Error("Function not implemented.");
  }

  function COMMENT_AUTHOR_CLICK_CALLBACK(author: User): void {
    throw new Error("Function not implemented.");
  }

  function CURRENT_USER_CLICK_CALLBACK(user: User): void {
    throw new Error("Function not implemented.");
  }
  const user: User = {
    _id: "100",
  };

  return (
    <>
      <h1>Replyk Comments Implementation Example</h1>
      <CommentSection
        apiBaseUrl="http://localhost:3000"
        articleId="Content"
        callbacks={{
          loginClickCallback: LOGIN_CALLBACK,
          commentAuthorClickCallback: COMMENT_AUTHOR_CLICK_CALLBACK,
          currentUserClickCallback: CURRENT_USER_CLICK_CALLBACK,
        }}
        currentUser={
          user
            ? {
                _id: "100",
                name: "Amit Anveri",
                img: "",
              }
            : undefined
        }
      />
    </>
  );
}

export default App;
