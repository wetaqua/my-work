using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hlavni_Program
{
    interface IMoveable
    {
        void Move();
        Vector Position { get; set; }
        Vector Speed { get; set; }
    }
}
