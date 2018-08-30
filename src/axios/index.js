import JsonP from 'jsonp'
import { Modal } from 'antd'
import axios from 'axios'

export default class Axios {
    static jsonp (options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response)    
                } else {
                    reject(response.message) 
                }
            })
        })
    }

    static ajax (options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        let baseApi = 'https://www.easy-mock.com/mock/5b860a6bfabccc2bb7e306b7/mockapi'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                // timeout: 10000,
                params: (options.data && options.data.params) || ''
            })
            .then(res => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if (res.status == '200') {
                    let data = res.data
                    if (data.status == '1') {
                        resolve(data)    
                    } else {
                        Modal.info({
                            title: '提示',
                            content: data.msg
                        })   
                    }
                } else {
                    reject(res.data)   
                }   
            })
            .catch(err => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
            })
        })
    }
}