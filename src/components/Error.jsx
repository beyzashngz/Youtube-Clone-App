

const Error = ({message}) => {
    console.log(message)
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5">
      <p>Üzgünüz bir hata oluştu. Daha sonra tekrar deneyiniz.</p>
      <h2 className="font-semibold">{message}</h2>
    </div>
  )
}

export default Error
