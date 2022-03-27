using WMO.Infrastructure.Enums;

namespace WMO.Infrastructure.Models
{
    public class RUP
    {
        public PhaseEnum Phase { get; set; }
        public string BreakdownElement { get; set; }
        public int Index { get; set; }
        public string RawPredecessors { get; set; }
        public List<int> Predecessors { get; set; }
        public TypeEnum Type { get; set; }
        public string Przydział { get; set; }
        public DisciplineEnum Dyscyplina { get; set; }
        public string ZakresWdrażania { get; set; }
        public CategoryEnum Kategorie { get; set; }
        public string Uzasadnienie { get; set; }

        public RUP(string[] args)
        {
            if (args == null)
                throw new ArgumentNullException();

            int phase, type, index;
            phase = SetPhase(args);

            this.BreakdownElement = args[1];

            if (int.TryParse(args[2], out index))
                this.Index = int.Parse(args[2]);

            this.RawPredecessors = args[3];

            type = SetType(args);

            this.Przydział = args[5];

            SetDiscipline(args[6].Trim().ToLower());

            this.ZakresWdrażania = args[7];

            //TODO Kategorie
            var categoriesName = args[12].Split(",").Select(x => x.Trim()).Select(x => x == "G" ? 1 : x == "P" ? 2 : x == "M" ? 4 : 8).Select(x => (CategoryEnum)(x));

            foreach (var category in categoriesName)
            {
                Kategorie |= category;
            }

            this.Uzasadnienie = args[13];

            if (RawPredecessors != null || RawPredecessors != "")
            {
                Predecessors = new List<int>();
                var predecessorsSplit = RawPredecessors.Split(",");
                foreach (var predecessor in predecessorsSplit)
                {
                    if (predecessor == null || predecessor == "") continue;
                    if(int.TryParse(predecessor, out int value))
                        Predecessors.Add(value);
                }
            }
        }

        private void SetDiscipline(string disipline)
        {
            switch (disipline)
            {
                case "business modeling":
                case "business modelling":
                    this.Dyscyplina = DisciplineEnum.BusinessModeling;
                    break;
                case "requirements":
                    this.Dyscyplina = DisciplineEnum.Requirements;
                    break;
                case "analysis and design":
                    this.Dyscyplina = DisciplineEnum.AnalysisAndDesign;
                    break;
                case "implementation":
                    this.Dyscyplina = DisciplineEnum.Implementation;
                    break;
                case "test":
                    this.Dyscyplina = DisciplineEnum.Test;
                    break;
                case "deployment":
                    this.Dyscyplina = DisciplineEnum.Deployment;
                    break;
                case "configuration and change management":
                    this.Dyscyplina = DisciplineEnum.ConfigurationAndChangeManagement;
                    break;
                case "project management":
                    this.Dyscyplina = DisciplineEnum.ProjectManagement;
                    break;
                case "environment":
                    this.Dyscyplina = DisciplineEnum.Environment;
                    break;
                default:
                    Console.WriteLine(disipline);
                    break;
            }
        }

        private int SetType(string[] args)
        {
            int type;
            if (int.TryParse(args[4], out type))
                this.Type = (TypeEnum)type;

            return type;
        }

        private int SetPhase(string[] args)
        {
            int phase;
            if (int.TryParse(args[0], out phase))
                this.Phase = (PhaseEnum)phase;

            return phase;
        }
    }
}
