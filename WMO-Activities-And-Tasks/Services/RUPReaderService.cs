using System.Collections.Generic;
using System.IO;
using WMO_Activities_And_Tasks.Models;

namespace WMO_Activities_And_Tasks.Services
{
    public class RUPReaderService
    {
        private readonly string splitVar = ";";

        public List<RUP> Read(string path)
        {
            bool isFirst = true;
            List<RUP> list = new List<RUP>();

            using var reader = new StreamReader(path);

            while (!reader.EndOfStream)
            {
                string? line = reader.ReadLine();
                var values = line?.Split(splitVar);

                if (!isFirst)
                {
                    if (values?.Length > 0)
                        list.Add(new RUP(values));
                }
                isFirst = false;
            }

            return list;
        }
    }
}
