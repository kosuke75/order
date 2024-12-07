import React from "react";
import { useNavigate } from "react-router-dom";

function UserInfo({ user, loading }) {
  const navigate = useNavigate(); 

  if (loading) {
    return <p>ログイン状態を確認中...</p>;
  }

  if (!user) {
    return <p>ユーザー情報が見つかりません。</p>;
  }

  const goToOrderPage = () => {
    navigate("/order"); // "/order" ページへ
  };

  return (
    <div>
      <h2>学食のモバイルオーダーサイトです</h2>
      <p>こんにちは、{user.displayName || "ゲスト"}さん</p>
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt="User Avatar"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      ) : (
        <p>プロフィール画像がありません。</p>
      )}
      <p>ログイン中のユーザー情報:</p>
      <ul>
        <li>名前: {user.displayName || "未設定"}</li>
        <li>メール: {user.email || "未設定"}</li>
      </ul>
      {/* メニューへ遷移するボタン */}
      <button onClick={goToOrderPage}>注文はこちら</button>
    </div>
  );
}

export default UserInfo;
