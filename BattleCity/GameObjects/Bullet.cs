using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BattleCity.Enums;

namespace BattleCity.GameObjects
{
	public class Bullet
	{
		#region Fields

		private readonly Direction direction;

		#endregion

		#region Contructor

		public Bullet(Direction direction)
		{
			this.direction = direction;
		}

		#endregion

		#region Properties

		public int Id { get; set; }

		public int TankId { get; set; }

		public Speed Speed { get; set; }

		public Direction Direction
		{
			get
			{
				return this.direction;
			}
		}

		public bool HasChanges { get; set; }

		#endregion

		#region Methods

		public void Move()
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
