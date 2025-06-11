interface BarraProgressoProps {
  progress: number;
}

const BarraProgresso = ({ progress }: BarraProgressoProps) => {
  return (
    <div className="w-full mb-4">
      <div className="flex flex-row justify-end">
        <span className="text-sm text-end font-bold text-branco">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-acinzentado rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BarraProgresso;
