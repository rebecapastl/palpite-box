import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/page-title'
import {aboutPhoto1, aboutPhoto2} from '../utils/image-variables'

const About = () => {
    return (
        <div>
            <PageTitle title='About'/>
            <div className='container text-justify text-gray-500 p-6 mb-10'>
                <h1 className='text-gray-500 text-center font-bold my-4 text-2xl'>About Restaurante X</h1>
                <div className='leading-loose'>
                    <figure className='float-right w-64 pl-4 pt-2'>
                        <img  src={aboutPhoto1.src} alt={aboutPhoto1.alt}></img>
                        <figcaption className='text-xs pt-2'>Photo by <a className='hover:text-yellow-600' href={aboutPhoto1.url}>{aboutPhoto1.author}</a></figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna. Pellentesque, velit lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue magna vel risus. </p>
                    <p>Cras non magna vel ante adipiscing rhoncus. Vivamus a mi. Morbi neque. Aliquam erat volutpat. Integer ultrices lobortis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin semper, ante vitae sollicitudin posuere, metus quam iaculis nibh, vitae scelerisque nunc massa eget pede. Sed velit urna, interdum vel, ultricies vel, faucibus at, quam. Donec elit est, consectetuer eget, consequat quis, tempus quis, wisi. In in nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec ullamcorper fringilla eros. Fusce in sapien eu purus dapibus commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras faucibus condimentum odio. Sed ac ligula. Aliquam at eros. Etiam at ligula et tellus ullamcorper ultrices. In fermentum, lorem non cursus porttitor, diam urna accumsan lacus, sed interdum wisi nibh nec nisl. Ut tincidunt volutpat urna. Mauris eleifend nulla eget mauris. Sed cursus quam id felis. Curabitur posuere quam vel nibh. Cras dapibus dapibus nisl. </p>
                    <figure className='float-left w-64 pr-4 pt-2'>
                        <img  src={aboutPhoto2.src} alt={aboutPhoto2.alt}></img>
                        <figcaption className='text-xs pt-2'>Photo by <a className='hover:text-yellow-600' href={aboutPhoto2.url}>{aboutPhoto2.author}</a></figcaption>
                    </figure>    
                    <p>Vestibulum quis dolor a felis congue vehicula. Maecenas pede purus, tristique ac, tempus eget, egestas quis, mauris. Curabitur non eros. Nullam hendrerit bibendum justo. Fusce iaculis, est quis lacinia pretium, pede metus molestie lacus, at gravida wisi ante at libero. Quisque ornare placerat risus. Ut molestie magna at mi. Integer aliquet mauris et nibh. Ut mattis ligula posuere velit. Nunc sagittis. Curabitur varius fringilla nisl. Duis pretium mi euismod erat. Maecenas id augue. Nam vulputate. Duis a quam non neque lobortis malesuada. Praesent euismod. Donec nulla augue, venenatis scelerisque, dapibus a, consequat at, leo. Pellentesque libero lectus, tristique ac, consectetuer sit amet, imperdiet ut, justo. Sed aliquam odio vitae tortor. Proin hendrerit tempus arcu. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus vitae massa adipiscing est lacinia sodales.</p> 
                    <p>Donec metus massa, mollis vel, tempus placerat, vestibulum condimentum, ligula. Nunc lacus metus, posuere eget, lacinia eu, varius quis, libero. Aliquam nonummy adipiscing augue. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                </div>

            </div>
        </div>
    )
}

export default About