class NAVIGATION  {
	private readonly main = '/'

	public MAIN=this.main
	public AUTHORIZATION=`${this.main}authorization`
	public CATEGORY=`${this.main}category`
	public CATEGORY_PRODUCT=`${this.CATEGORY}/product`
	public PAYMENT=`${this.main}payment`
	public DASHBOARD=`${this.main}dashboard`
	public DASHBOARD_ORDERS=`${this.DASHBOARD}/orders`
	public DASHBOARD_FAVORITES=`${this.DASHBOARD}/favorites`
}

export const PAGES_NAVIGATION = new NAVIGATION()