<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::get();
        return view('product.index',compact('products'));
    }

    public function create()
    {
        return view('product.create');
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $product = Product::create([
        'name' => request('name'),
        'type' => request('type'),
        'count' => request('count'),
        'price' => request('price')
        ]);
        //dd($product);
        return redirect('product/index');
    }

}
