using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BattleCity.Enums;

namespace BattleCity.GameObjects
{
	public class Bonus
	{
		#region Fields

		private readonly BonusType type;

		#endregion

		#region Constructor

		public Bonus(BonusType type)
		{
			this.type = type;
		}

		#endregion

		#region Properties

		public BonusType Type
		{
			get
			{
				return this.type;
			}
		}

		public bool HasChanges { get; set; }

		#endregion

		#region Methods

		public void Destroy()
		{
			//TODO: implement it
		}

		#endregion
	}
}