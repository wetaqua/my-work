using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace Hlavni_Program
{
    internal class Osoba
    {
        private string jmeno;
        private string prijmeni;
        private string vek;

        public Osoba(string Jmeno, string prijmeni, string vek)
        {
            jmeno = Jmeno;
            this.prijmeni = prijmeni;
            this.vek = vek;
        }

        public void ToString()
        {
            Console.WriteLine(jmeno + " " + prijmeni + " " + vek);
        }
    }
}
