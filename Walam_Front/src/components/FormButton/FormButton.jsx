/* eslint-disable react/prop-types */
export default function FormButton (props) {
  return (
    <input
      type='submit'
      disabled={props.disabled || false}
      className={`${props.color} ${props.hover} disabled:bg-gray-400 cursor-pointer text-sm border border-gray-700 font-semibold mt-3 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full`}
      value={props.text}
    />
  )
}
