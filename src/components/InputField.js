import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

const InputField = ({ label, fieldType, ...props }) => {
  const [field, meta] = useField(props);

  const applyStyle = () => {
    if (fieldType === 'primary') {
      return 'w-[323px] h-[53px] sm:w-[613px] lg:w-[400px] xl:w-[613px]';
    }
    if (fieldType === 'secondary') {
      return 'w-[323px] sm:w-[613px] h-[110px] lg:w-[400px] xl:w-[613px]';
    }
  };

  const applyGeneralStyle = () => {
    return 'block shadow-input-shadow transition ease-in-out bg-white border rounded-lg form-control  focus:outline-none focus:rounded-lg placeholder:text-deep-violet-300 placeholder:text-opacity-25 placeholder:font-medium placeholder:leading-6 placeholder:text-lg pl-4 text-deep-violet-300 text-lg font-medium leading-6';
  };
  return (
    <>
      {fieldType === 'primary' ? (
        <label
          htmlFor={props.id || props.name}
          aria-hidden="true"
          className={classNames(
            'hidden text-xs font-medium leading-4 uppercase tracking-[2px]'
          )}
        >
          {label}
        </label>
      ) : null}
      <div>
        {fieldType === 'primary' && (
          <input
            {...field}
            {...props}
            className={classNames(
              applyGeneralStyle(),
              applyStyle(),
              meta.touched && meta.error
                ? 'border-theme-red-800 shadow-none'
                : 'border-black border-opacity-25'
            )}
          />
        )}

        {fieldType === 'secondary' && (
          <textarea
            {...field}
            {...props}
            className={classNames(
              applyGeneralStyle(),
              applyStyle(),
              'pt-3',
              meta.error
                ? 'border-theme-red-800 shadow-none'
                : 'border-black border-opacity-25'
            )}
          />
        )}

        {meta.touched && meta.error ? (
          <span
            className={classNames(
              'block mt-2 text-sm font-semibold leading-4 text-theme-red-800'
            )}
          >
            {meta.error}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
