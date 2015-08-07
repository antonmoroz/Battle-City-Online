using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BattleCity.Enums;

namespace BattleCity.GameObjects
{
	public class Tank
	{
		#region Properties

		public int Id { get; set; }

		public Speed Speed { get; set; }

		public Direction Direction { get; set; }

		public int Stars { get; set; }

		public int Health { get; set; }

		public Color Color { get; set; }

		public bool HasChanges { get; set; }

		#endregion

		#region Methods

		public void Move(Direction direction)
		{
			//TODO: implement it
		}

		public void Destroy()
		{
			//TODO: implement it
		}

		#endregion
	}
}